import React, { useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

export default function Steps({ progress }) {
  return (
    <ProgressBar percent={progress}>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          </>
        )}
      </Step>
    </ProgressBar>
  );
}
