// Login & Register
const bcrypt = require("bcryptjs");
const User = require("../models/User");
//Validation
const ValidateRegisterInput = require("../validations/registerValidation");
const ValidateLoginInput = require("../validations/loginValidation");

module.exports = {
  // @route   POST user/register
  // @desc    User registeration
  // @access  Public
  register: async (req, res) => {
    const { errors, isValid } = ValidateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json({ errors });
    }
    try {
      const isExist = await User.findOne({
        $or: [
          ({ email: req.body.email },
          {
            nationalId: req.body.nationalId,
          }),
        ],
      });
      if (isExist && isExist.email === req.body.email) {
        errors.email = "Email is already exist";
        return res.status(400).json({ errors });
      } else if (isExist && isExist.nationalId === req.body.nationalId) {
        errors.nationalId = "National id is already exist";
        return res.status(400).json({ errors });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          nationalId: req.body.nationalId,
          phone: req.body.phone,
          birthdate: req.body.birthdate,
          gender: req.body.gender,
          address: req.body.address,
          socialStatus: req.body.socialStatus,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, async (err, hash) => {
            if (err) return err;
            newUser.password = hash;
            try {
              await newUser.save();
              res.json({ user: newUser });
            } catch (error) {
              res.json({ error });
            }
          });
        });
      }
    } catch (error) {
      res.json(error);
    }
  },
  // @route   POST user/login
  // @desc    User Login By Email or National ID
  // @access  Public
  login: async (req, res) => {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      nationalId: req.body.nationalId,
    };

    const { errors, isValid } = ValidateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json({ errors });
    }

    try {
      const user = await User.findOne({
        $or: [{ email: userData.email }, { nationalId: userData.nationalId }],
      });
      if (!user) {
        errors.user = "User not found";
        return res.status(404).json({ errors });
      }

      const isMatch = await bcrypt.compare(userData.password, user.password);
      if (!isMatch) {
        errors.password = "Password incorrect";
        return res.status(404).json({ errors });
      }
      const token = await user.generateAuthToken();
      res.json({ user, token });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  // @route   GET user/me
  // @desc    My Profile Info
  // @access  Private
  profile: (req, res) => {
    res.json({ myProfile: req.user });
  },
  logout: async (req, res) => {
    req.user.token = "";
    await req.user.save();

    res.json({ success: true });
  },
};
