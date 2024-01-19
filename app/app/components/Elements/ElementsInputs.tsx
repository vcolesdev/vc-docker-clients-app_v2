"use client";

import React from "react";
import { elemStyles } from "./Elements";

const formControlStyles = {
  container: {
    styles: "block mb-5",
  },
  label: {
    styles: "block mb-1 text-gray-700 font-sans font-medium",
  },
  labelCheck: {
    styles: "inline-block mr-2 text-gray-700 font-sans font-medium",
  },
  input: {
    styles: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",
  },
  checkbox: {
    styles: "inline-block mr-2 text-primary-600 border-gray-300 rounded focus:ring-primary-500",
  },
  radio: {
    styles: "inline-block mr-2 text-primary-600 border-gray-300 rounded focus:ring-primary-500",
  },
  error: {
    styles: "block mt-1 text-sm text-red-600 font-sans font-medium",
  },
}

export default function ElementsInputs() {
  return (
    <>
      <section className={elemStyles.section} data-title="Elements - Inputs">
        <header className={elemStyles.header}>
          <h2 className={elemStyles.heading}>Elements - Inputs</h2>
          <p className={elemStyles.description}>Inputs are used for collecting user input.</p>
        </header>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Text</h3>
          <div className={elemStyles.content}>
            {/* Input - Text */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputText" className={formControlStyles.label.styles}>
                <span>Text Input</span>
              </label>
              <input
                className={formControlStyles.input.styles}
                id="textInput"
                name="textInput"
                type="text"
              />
            </div>
            {/* Input - Text - Disabled */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputTextDisabled" className={formControlStyles.label.styles}>
                <span>Text Input - Disabled</span>
              </label>
              <input
                className={formControlStyles.input.styles}
                id="textInputDisabled"
                name="textInputDisabled"
                type="text"
                disabled
              />
            </div>
            {/* Input - Text - Error */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputTextError" className={formControlStyles.label.styles}>
                <span>Text Input - Error</span>
              </label>
              <input
                className={formControlStyles.input.styles}
                id="inputTextError"
                name="inputTextError"
                type="text"
              />
              <span className={formControlStyles.error.styles}>Error Message</span>
            </div>
          </div>
          <h3 className={elemStyles.subheading}>Email</h3>
          <div className={elemStyles.content}>
            {/* Input - Email */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputEmail" className={formControlStyles.label.styles}>
                <span>Email Input</span>
              </label>
              <input
                className={formControlStyles.input.styles}
                id="inputEmail"
                name="inputEmail"
                type="email"
              />
            </div>
            {/* Input - Email - Disabled */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputEmailDisabled" className={formControlStyles.label.styles}>
                <span>Email Input - Disabled</span>
              </label>
              <input
                className={formControlStyles.input.styles}
                id="inputEmailDisabled"
                name="inputEmailDisabled"
                type="email"
                disabled
              />
            </div>
            {/* Input - Email - Error */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputEmailError" className={formControlStyles.label.styles}>
                <span>Email Input - Error</span>
              </label>
              <input
                className={formControlStyles.input.styles}
                id="inputEmailError"
                name="inputEmailError"
                type="email"
              />
              <span className={formControlStyles.error.styles}>Error Message</span>
            </div>
          </div>
          <h3 className={elemStyles.subheading}>Textarea</h3>
          <div className={elemStyles.content}>
            {/* Input - Textarea */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputTextarea" className={formControlStyles.label.styles}>
                <span>Textarea</span>
              </label>
              <textarea
                className={formControlStyles.input.styles}
                id="inputTextarea"
                name="inputTextarea"
              />
            </div>
            {/* Input - Textarea - Disabled */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputTextareaDisabled" className={formControlStyles.label.styles}>
                <span>Textarea - Disabled</span>
              </label>
              <textarea
                className={formControlStyles.input.styles}
                id="inputTextareaDisabled"
                name="inputTextareaDisabled"
                disabled
              />
            </div>
            {/* Input - Textarea - Error */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputTextareaError" className={formControlStyles.label.styles}>
                <span>Textarea - Error</span>
              </label>
              <textarea
                className={formControlStyles.input.styles}
                id="inputTextareaError"
                name="inputTextareaError"
              />
              <span className={formControlStyles.error.styles}>Error Message</span>
            </div>
          </div>
          <h3 className={elemStyles.subheading}>Select</h3>
          <div className={elemStyles.content}>
            {/* Input - Select */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputSelect" className={formControlStyles.label.styles}>
                <span>Select</span>
              </label>
              <select className={formControlStyles.input.styles} id="inputSelect" name="inputSelect">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>
            {/* Input - Select - Disabled */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputSelectDisabled" className={formControlStyles.label.styles}>
                <span>Select - Disabled</span>
              </label>
              <select
                className={formControlStyles.input.styles}
                id="inputSelectDisabled"
                name="inputSelectDisabled"
                disabled
              >
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>
            {/* Input - Select - Error */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputSelectError" className={formControlStyles.label.styles}>
                <span>Select - Error</span>
              </label>
              <select className={formControlStyles.input.styles} id="inputSelectError" name="inputSelectError">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
              <span className={formControlStyles.error.styles}>Error Message</span>
            </div>
          </div>
          <h3 className={elemStyles.subheading}>Checkbox</h3>
          <div className={elemStyles.content}>
            {/* Input - Checkbox */}
            <div className={formControlStyles.container.styles}>
              <input
                className={formControlStyles.checkbox.styles}
                id="inputCheckbox"
                name="inputCheckbox"
                type="checkbox"
              />
              <label htmlFor="inputCheckbox" className={formControlStyles.labelCheck.styles}>
                <span>Checkbox</span>
              </label>
            </div>
            {/* Input - Checkbox - Disabled */}
            <div className={formControlStyles.container.styles}>
              <input
                className={formControlStyles.checkbox.styles}
                id="inputCheckboxDisabled"
                name="inputCheckboxDisabled"
                type="checkbox"
                disabled
              />
              <label htmlFor="inputCheckboxDisabled" className={formControlStyles.labelCheck.styles}>
                <span>Checkbox - Disabled</span>
              </label>
            </div>
            {/* Input - Checkbox - Error */}
            <div className={formControlStyles.container.styles}>
              <div>
                <input
                  className={formControlStyles.checkbox.styles}
                  id="inputCheckboxError"
                  name="inputCheckboxError"
                  type="checkbox"
                />
                <label htmlFor="inputCheckboxError" className={formControlStyles.labelCheck.styles}>
                  <span>Checkbox - Error</span>
                </label>
              </div>
              <span className={formControlStyles.error.styles}>Error Message</span>
            </div>
          </div>
          <h3 className={elemStyles.subheading}>Radio</h3>
          <div className={elemStyles.content}>
            {/* Input - Radio */}
            <div className={formControlStyles.container.styles}>
              <input
                className={formControlStyles.radio.styles}
                id="inputRadio"
                name="inputRadio"
                type="radio"
              />
              <label htmlFor="inputRadio" className={formControlStyles.labelCheck.styles}>
                <span>Radio</span>
              </label>
            </div>
            {/* Input - Radio - Disabled */}
            <div className={formControlStyles.container.styles}>
              <input
                className={formControlStyles.radio.styles}
                id="inputRadioDisabled"
                name="inputRadioDisabled"
                type="radio"
                disabled
              />
              <label htmlFor="inputRadioDisabled" className={formControlStyles.labelCheck.styles}>
                <span>Radio - Disabled</span>
              </label>
            </div>
            {/* Input - Radio - Error */}
            <div className={formControlStyles.container.styles}>
              <div>
                <input
                  className={formControlStyles.radio.styles}
                  id="inputRadioError"
                  name="inputRadioError"
                  type="radio"
                />
                <label htmlFor="inputRadioError" className={formControlStyles.labelCheck.styles}>
                  <span>Radio - Error</span>
                </label>
              </div>
              <span className={formControlStyles.error.styles}>Error Message</span>
            </div>
          </div>
          <h3 className={elemStyles.subheading}>Switch</h3>
          <div className={elemStyles.content}>
            {/* Input - Switch */}
            <div className={formControlStyles.container.styles}>
              <input
                className={formControlStyles.checkbox.styles}
                id="inputSwitch"
                name="inputSwitch"
                type="checkbox"
              />
              <label htmlFor="inputSwitch" className={formControlStyles.labelCheck.styles}>
                <span>Switch</span>
              </label>
            </div>
            {/* Input - Switch - Disabled */}
            <div className={formControlStyles.container.styles}>
              <input
                className={formControlStyles.checkbox.styles}
                id="inputSwitchDisabled"
                name="inputSwitchDisabled"
                type="checkbox"
                disabled
              />
              <label htmlFor="inputSwitchDisabled" className={formControlStyles.labelCheck.styles}>
                <span>Switch - Disabled</span>
              </label>
            </div>
            {/* Input - Switch - Error */}
            <div className={formControlStyles.container.styles}>
              <div>
                <input
                  className={formControlStyles.checkbox.styles}
                  id="inputSwitchError"
                  name="inputSwitchError"
                  type="checkbox"
                />
                <label htmlFor="inputSwitchError" className={formControlStyles.labelCheck.styles}>
                  <span>Switch - Error</span>
                </label>
              </div>
              <span className={formControlStyles.error.styles}>Error Message</span>
            </div>
          </div>
          <h3 className={elemStyles.subheading}>File</h3>
          <div className={elemStyles.content}>
            {/* Input - File */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputFile" className={formControlStyles.label.styles}>
                <span>File</span>
              </label>
              <input
                className={formControlStyles.input.styles}
                id="inputFile"
                name="inputFile"
                type="file"
              />
            </div>
            {/* Input - File - Disabled */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputFileDisabled" className={formControlStyles.label.styles}>
                <span>File - Disabled</span>
              </label>
              <input
                className={formControlStyles.input.styles}
                id="inputFileDisabled"
                name="inputFileDisabled"
                type="file"
                disabled
              />
            </div>
            {/* Input - File - Error */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputFileError" className={formControlStyles.label.styles}>
                <span>File - Error</span>
              </label>
              <input
                className={formControlStyles.input.styles}
                id="inputFileError"
                name="inputFileError"
                type="file"
              />
              <span className={formControlStyles.error.styles}>Error Message</span>
            </div>
          </div>
          <h3 className={elemStyles.subheading}>Date</h3>
          <div className={elemStyles.content}>
            {/* Input - Date */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputDate" className={formControlStyles.label.styles}>
                <span>Date</span>
              </label>
              <input
                className={formControlStyles.input.styles}
                id="inputDate"
                name="inputDate"
                type="date"
              />
            </div>
            {/* Input - Date - Disabled */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputDateDisabled" className={formControlStyles.label.styles}>
                <span>Date - Disabled</span>
              </label>
              <input
                className={formControlStyles.input.styles}
                id="inputDateDisabled"
                name="inputDateDisabled"
                type="date"
                disabled
              />
            </div>
            {/* Input - Date - Error */}
            <div className={formControlStyles.container.styles}>
              <label htmlFor="inputDateError" className={formControlStyles.label.styles}>
                <span>Date - Error</span>
              </label>
              <input
                className={formControlStyles.input.styles}
                id="inputDateError"
                name="inputDateError"
                type="date"
              />
              <span className={formControlStyles.error.styles}>Error Message</span>
            </div>
          </div>
          <h3 className={elemStyles.subheading}>Submit</h3>
          <div className={elemStyles.content}>
            {/* Input - Submit */}
            <div className={formControlStyles.container.styles}>
              <button className={formControlStyles.input.styles} type="submit">
                Submit
              </button>
            </div>
            {/* Input - Submit - Disabled */}
            <div className={formControlStyles.container.styles}>
              <button className={formControlStyles.input.styles} type="submit" disabled>
                Submit - Disabled
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export { ElementsInputs, formControlStyles }