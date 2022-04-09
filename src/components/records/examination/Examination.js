import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ExaminationTable from "../ExaminationTable";
import FilterModal from "./../FilterModal";

const Examination = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="examination">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="examination-filter">
            <div className="examination-filter-header">Examination</div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="examination-filer-button">
                  <button
                    className="btn-primary"
                    onClick={() => setModalShow(true)}
                  >
                    <FontAwesomeIcon icon={faFilter} /> Add filter
                  </button>

                  <FilterModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="examination-filer-button">
                  <button
                    className="btn-primary"
                    onClick={() => setModalShow(true)}
                  >
                    <FontAwesomeIcon icon={faFilter} /> Add record
                  </button>

                  <FilterModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="examination-table">
            {/* <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-1fw5qro-MuiPaper-root">
            <div class="MuiTableContainer-root css-41abqd-MuiTableContainer-root">
            <table class="MuiTable-root MuiTable-stickyHeader css-xn82ks-MuiTable-root" aria-label="sticky table">
            <thead class="MuiTableHead-root css-15wwp11-MuiTableHead-root">
            <tr class="MuiTableRow-root MuiTableRow-head css-1q1u3t4-MuiTableRow-root">
            <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-stickyHeader MuiTableCell-sizeMedium css-y8ay40-MuiTableCell-root" scope="col" style="min-width: 170px;">Name</th>
            <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-stickyHeader MuiTableCell-sizeMedium css-y8ay40-MuiTableCell-root" scope="col" style="min-width: 100px;">ISO&nbsp;Code</th>
            <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-stickyHeader MuiTableCell-alignRight MuiTableCell-sizeMedium css-i02g0k-MuiTableCell-root" scope="col" style="min-width: 170px;">Population</th>
            <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-stickyHeader MuiTableCell-alignRight MuiTableCell-sizeMedium css-i02g0k-MuiTableCell-root" scope="col" style="min-width: 170px;">Size&nbsp;(km²)</th>
            <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-stickyHeader MuiTableCell-alignRight MuiTableCell-sizeMedium css-i02g0k-MuiTableCell-root" scope="col" style="min-width: 170px;">Density</th>
            </tr>
            </thead>
            <tbody class="MuiTableBody-root css-apqrd9-MuiTableBody-root">
              <tr class="MuiTableRow-root MuiTableRow-hover css-1q1u3t4-MuiTableRow-root" role="checkbox" tabindex="-1">
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">India</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">IN</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">1,324,171,354</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">3,287,263</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">402.82</td>
            </tr>
            <tr class="MuiTableRow-root MuiTableRow-hover css-1q1u3t4-MuiTableRow-root" role="checkbox" tabindex="-1">
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">China</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">CN</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">1,403,500,365</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">9,596,961</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">146.24</td>
            </tr><tr class="MuiTableRow-root MuiTableRow-hover css-1q1u3t4-MuiTableRow-root" role="checkbox" tabindex="-1">
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">Italy</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">IT</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">60,483,973</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">301,340</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">200.72</td>
            </tr>
            <tr class="MuiTableRow-root MuiTableRow-hover css-1q1u3t4-MuiTableRow-root" role="checkbox" tabindex="-1">
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">United States</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">US</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">327,167,434</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">9,833,520</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">33.27</td>
            </tr>
            <tr class="MuiTableRow-root MuiTableRow-hover css-1q1u3t4-MuiTableRow-root" role="checkbox" tabindex="-1">
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">Canada</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">CA</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">37,602,103</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">9,984,670</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">3.77</td>
            </tr>
            <tr class="MuiTableRow-root MuiTableRow-hover css-1q1u3t4-MuiTableRow-root" role="checkbox" tabindex="-1">
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">Australia</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">AU</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">25,475,400</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">7,692,024</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">3.31</td>
            </tr><tr class="MuiTableRow-root MuiTableRow-hover css-1q1u3t4-MuiTableRow-root" role="checkbox" tabindex="-1">
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">Germany</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">DE</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">83,019,200</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">357,578</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">232.17</td>
            </tr>
            <tr class="MuiTableRow-root MuiTableRow-hover css-1q1u3t4-MuiTableRow-root" role="checkbox" tabindex="-1">
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">Ireland</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">IE</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">4,857,000</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">70,273</td>
            <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">69.12</td>
            </tr>
            <tr class="MuiTableRow-root MuiTableRow-hover css-1q1u3t4-MuiTableRow-root" role="checkbox" tabindex="-1">
              <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">Mexico</td>
              <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">MX</td>
              <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">126,577,691</td>
              <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">1,972,550</td>
              <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">64.17</td>
              </tr>
              <tr class="MuiTableRow-root MuiTableRow-hover css-1q1u3t4-MuiTableRow-root" role="checkbox" tabindex="-1">
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">Japan</td>
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">JP</td>
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">126,317,000</td><td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">377,973</td><td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">334.20</td></tr></tbody></table></div><div class="MuiTablePagination-root css-jtlhu6-MuiTablePagination-root"><div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular MuiTablePagination-toolbar css-11bfvty-MuiToolbar-root-MuiTablePagination-toolbar"><div class="MuiTablePagination-spacer css-1psng7p-MuiTablePagination-spacer"></div><p class="MuiTablePagination-selectLabel css-pdct74-MuiTablePagination-selectLabel" id="mui-2">Rows per page:</p><div variant="standard" class="MuiInputBase-root MuiInputBase-colorPrimary css-16c50h-MuiInputBase-root-MuiTablePagination-select"><div tabindex="0" role="button" aria-expanded="false" aria-haspopup="listbox" class="MuiTablePagination-select MuiSelect-select MuiSelect-standard MuiInputBase-input css-194a1fa-MuiSelect-select-MuiInputBase-input" aria-labelledby="mui-2 mui-1" id="mui-1">10</div><input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput" value="10">
             class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiTablePagination-selectIcon MuiSelect-icon MuiSelect-iconStandard css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="M7 10l5 5 5-5z"></path></svg></div><p class="MuiTablePagination-displayedRows css-levciy-MuiTablePagination-displayedRows">1–10 of 15</p><div class="MuiTablePagination-actions"><button class="MuiButtonBase-root Mui-disabled MuiIconButton-root Mui-disabled MuiIconButton-colorInherit MuiIconButton-sizeMedium css-zylse7-MuiButtonBase-root-MuiIconButton-root" tabindex="-1" type="button" disabled="" aria-label="Go to previous page" title="Go to previous page"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowLeftIcon"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></svg></button><button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeMedium css-zylse7-MuiButtonBase-root-MuiIconButton-root" tabindex="0" type="button" aria-label="Go to next page" title="Go to next page"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg><span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button></div></div></div></div></div></div></div> */}
            <ExaminationTable
              col0="#"
              firstcol="first"
              seccol="last"
              third="donia"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examination;
