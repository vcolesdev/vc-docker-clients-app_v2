"use client";

import React from "react";
import { elemStyles } from "./Elements";
import { Button } from "../Controls/Button/Button";

const buttonStyles = {
  styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
  content: "inline-block",
  disabled: "opacity-50 cursor-not-allowed",
  primary: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  secondary: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-800 bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  brand: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  success: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  warning: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-warning-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  info: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  danger: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  }
}

const buttonOutlineStyles = {
  styles: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
  content: "inline-block",
  disabled: "opacity-50 cursor-not-allowed",
  primary: {
    styles: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-slate-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  secondary: {
    styles: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-slate-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  brand: {
    styles: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-violet-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  success: {
    styles: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-emerald-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  warning: {
    styles: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-amber-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  info: {
    styles: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  danger: {
    styles: "inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-rose-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  }
}

const buttonGhostStyles = {
  styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
  content: "inline-block",
  disabled: "opacity-50 cursor-not-allowed",
  primary: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-800 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  secondary: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-800 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  brand: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-violet-500 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  success: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-emerald-500 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  warning: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-amber-500 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  info: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-500 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  },
  danger: {
    styles: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-rose-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    content: "inline-block",
  }
}

function ElementsButtons() {
  return (
    <>
      <section className={elemStyles.section} data-title="Elements - Buttons">
        <header className={elemStyles.header}>
          <h2 className={elemStyles.heading}>Elements - Buttons</h2>
          <p className={elemStyles.description}>Buttons are used for triggering an action.</p>
        </header>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Buttons</h3>
          <p className="mb-4">Plain, unstyled buttons.</p>
          <div className={elemStyles.content}>
            {/* Input - Button */}
            <div className="inline-block me-3">
              <button className={buttonStyles.styles} type="button">
                <span className={buttonStyles.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Disabled */}
            <div className="inline-block">
              <button className={`${buttonStyles.styles} ${buttonStyles.disabled}`} type="button" disabled>
                <span className={buttonStyles.content}>Button - Disabled</span>
              </button>
            </div>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Primary</h3>
          <p className="mb-4">Primary buttons are used for primary actions.</p>
          <div className={elemStyles.content}>
            {/* Input - Button - Primary */}
            <div className="inline-block me-3">
              <button className={`${buttonStyles.primary.styles}`} type="button">
                <span className={buttonStyles.primary.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Primary Outline */}
            <div className="inline-block me-3">
              <button className={`${buttonOutlineStyles.primary.styles}`} type="button">
                <span className={buttonOutlineStyles.primary.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Primary Ghost */}
            <div className="inline-block me-3">
              <button className={`${buttonGhostStyles.primary.styles}`} type="button">
                <span className={buttonGhostStyles.primary.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Primary - Disabled */}
            <div className="inline-block">
              <button className={`${buttonStyles.primary.styles} ${buttonStyles.disabled}`} type="button" disabled>
                <span className={buttonStyles.primary.content}>Button - Disabled</span>
              </button>
            </div>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Secondary</h3>
          <p className="mb-4">Secondary buttons are used for secondary actions.</p>
          <div className={elemStyles.content}>
            {/* Input - Button - Secondary */}
            <div className="inline-block me-3">
              <button className={`${buttonStyles.secondary.styles}`} type="button">
                <span className={buttonStyles.secondary.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Secondary Outline */}
            <div className="inline-block me-3">
              <button className={`${buttonOutlineStyles.secondary.styles}`} type="button">
                <span className={buttonOutlineStyles.secondary.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Secondary Ghost */}
            <div className="inline-block me-3">
              <button className={`${buttonGhostStyles.secondary.styles}`} type="button">
                <span className={buttonGhostStyles.secondary.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Secondary - Disabled */}
            <div className="inline-block">
              <button className={`${buttonStyles.secondary.styles} ${buttonStyles.disabled}`} type="button" disabled>
                <span className={buttonStyles.secondary.content}>Button - Disabled</span>
              </button>
            </div>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Brand</h3>
          <p className="mb-4">Brand buttons are used for brand actions.</p>
          <div className={elemStyles.content}>
            {/* Input - Button - Brand */}
            <div className="inline-block me-3">
              <button className={`${buttonStyles.brand.styles}`} type="button">
                <span className={buttonStyles.brand.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Brand Outline */}
            <div className="inline-block me-3">
              <button className={`${buttonOutlineStyles.brand.styles}`} type="button">
                <span className={buttonOutlineStyles.brand.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Brand Ghost */}
            <div className="inline-block me-3">
              <button className={`${buttonGhostStyles.brand.styles}`} type="button">
                <span className={buttonGhostStyles.brand.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Brand - Disabled */}
            <div className="inline-block">
              <button className={`${buttonStyles.brand.styles} ${buttonStyles.disabled}`} type="button" disabled>
                <span className={buttonStyles.brand.content}>Button - Disabled</span>
              </button>
            </div>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Success</h3>
          <p className="mb-4">Success buttons are used for successful actions.</p>
          <div className={elemStyles.content}>
            {/* Input - Button - Success */}
            <div className="inline-block me-3">
              <button className={`${buttonStyles.success.styles}`} type="button">
                <span className={buttonStyles.success.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Success Outline */}
            <div className="inline-block me-3">
              <button className={`${buttonOutlineStyles.success.styles}`} type="button">
                <span className={buttonOutlineStyles.success.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Success Ghost */}
            <div className="inline-block me-3">
              <button className={`${buttonGhostStyles.success.styles}`} type="button">
                <span className={buttonGhostStyles.success.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Success - Disabled */}
            <div className="inline-block">
              <button className={`${buttonStyles.success.styles} ${buttonStyles.disabled}`} type="button" disabled>
                <span className={buttonStyles.success.content}>Button - Disabled</span>
              </button>
            </div>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Warning</h3>
          <p className="mb-4">Warning buttons are used for warning actions.</p>
          <div className={elemStyles.content}>
            {/* Input - Button - Warning */}
            <div className="inline-block me-3">
              <button className={`${buttonStyles.warning.styles}`} type="button">
                <span className={buttonStyles.warning.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Warning Outline */}
            <div className="inline-block me-3">
              <button className={`${buttonOutlineStyles.warning.styles}`} type="button">
                <span className={buttonOutlineStyles.warning.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Warning Ghost */}
            <div className="inline-block me-3">
              <button className={`${buttonGhostStyles.warning.styles}`} type="button">
                <span className={buttonGhostStyles.warning.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Warning - Disabled */}
            <div className="inline-block">
              <button className={`${buttonStyles.warning.styles} ${buttonStyles.disabled}`} type="button" disabled>
                <span className={buttonStyles.warning.content}>Button - Disabled</span>
              </button>
            </div>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Info</h3>
          <p className="mb-4">Info buttons are used for informational actions.</p>
          <div className={elemStyles.content}>
            {/* Input - Button - Info */}
            <div className="inline-block me-3">
              <button className={`${buttonStyles.info.styles}`} type="button">
                <span className={buttonStyles.info.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Info Outline */}
            <div className="inline-block me-3">
              <button className={`${buttonOutlineStyles.info.styles}`} type="button">
                <span className={buttonOutlineStyles.info.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Info Ghost */}
            <div className="inline-block me-3">
              <button className={`${buttonGhostStyles.info.styles}`} type="button">
                <span className={buttonGhostStyles.info.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Info - Disabled */}
            <div className="inline-block">
              <button className={`${buttonStyles.info.styles} ${buttonStyles.disabled}`} type="button" disabled>
                <span className={buttonStyles.info.content}>Button - Disabled</span>
              </button>
            </div>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Danger</h3>
          <p className="mb-4">Danger buttons are used for dangerous actions.</p>
          <div className={elemStyles.content}>
            {/* Input - Button - Danger */}
            <div className="inline-block me-3">
              <button className={`${buttonStyles.danger.styles}`} type="button">
                <span className={buttonStyles.danger.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Danger Outline */}
            <div className="inline-block me-3">
              <button className={`${buttonOutlineStyles.danger.styles}`} type="button">
                <span className={buttonOutlineStyles.danger.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Danger Ghost */}
            <div className="inline-block me-3">
              <button className={`${buttonGhostStyles.danger.styles}`} type="button">
                <span className={buttonGhostStyles.danger.content}>Button</span>
              </button>
            </div>
            {/* Input - Button - Danger - Disabled */}
            <div className="inline-block">
              <button className={`${buttonStyles.danger.styles} ${buttonStyles.disabled}`} type="button" disabled>
                <span className={buttonStyles.danger.content}>Button - Disabled</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={elemStyles.section} data-title="Button Component">
        <header className={elemStyles.header}>
          <h2 className={elemStyles.heading}>Button Component</h2>
          <p className={elemStyles.description}>Button component with variants.</p>
        </header>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Default</h3>
          <p className="mb-4">Default buttons.</p>
          <div className="inline-block me-3">
            <Button>
              Default Button
            </Button>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Primary</h3>
          <p className="mb-4">Primary buttons are used for primary actions.</p>
          <div className="inline-block me-3">
            <Button.primary>
              Primary Button
            </Button.primary>
          </div>
          <div className="inline-block me-3">
            <Button.primary variant="outline">
              Primary Button
            </Button.primary>
          </div>
          <div className="inline-block me-3">
            <Button.primary variant="ghost">
              Primary Button
            </Button.primary>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Secondary</h3>
          <p className="mb-4">Secondary buttons are used for secondary actions.</p>
          <div className="inline-block me-3">
            <Button.secondary>
              Secondary Button
            </Button.secondary>
          </div>
          <div className="inline-block me-3">
            <Button.secondary variant="outline">
              Secondary Button
            </Button.secondary>
          </div>
          <div className="inline-block me-3">
            <Button.secondary variant="ghost">
              Secondary Button
            </Button.secondary>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Brand</h3>
          <p className="mb-4">Brand buttons are used for brand actions.</p>
          <div className="inline-block me-3">
            <Button.brand>
              Brand Button
            </Button.brand>
          </div>
          <div className="inline-block me-3">
            <Button.brand variant="outline">
              Brand Button
            </Button.brand>
          </div>
          <div className="inline-block me-3">
            <Button.brand variant="ghost">
              Brand Button
            </Button.brand>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Success</h3>
          <p className="mb-4">Success buttons are used for successful actions.</p>
          <div className="inline-block me-3">
            <Button.success>
              Success Button
            </Button.success>
          </div>
          <div className="inline-block me-3">
            <Button.success variant="outline">
              Success Button
            </Button.success>
          </div>
          <div className="inline-block me-3">
            <Button.success variant="ghost">
              Success Button
            </Button.success>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Warning</h3>
          <p className="mb-4">Warning buttons are used for warning actions.</p>
          <div className="inline-block me-3">
            <Button.warning>
              Warning Button
            </Button.warning>
          </div>
          <div className="inline-block me-3">
            <Button.warning variant="outline">
              Warning Button
            </Button.warning>
          </div>
          <div className="inline-block me-3">
            <Button.warning variant="ghost">
              Warning Button
            </Button.warning>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Info</h3>
          <p className="mb-4">Info buttons are used for informational actions.</p>
          <div className="inline-block me-3">
            <Button.info>
              Info Button
            </Button.info>
          </div>
          <div className="inline-block me-3">
            <Button.info variant="outline">
              Info Button
            </Button.info>
          </div>
          <div className="inline-block me-3">
            <Button.info variant="ghost">
              Info Button
            </Button.info>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Danger</h3>
          <p className="mb-4">Danger buttons are used for dangerous actions.</p>
          <div className="inline-block me-3">
            <Button.danger>
              Danger Button
            </Button.danger>
          </div>
          <div className="inline-block me-3">
            <Button.danger variant="outline">
              Danger Button
            </Button.danger>
          </div>
          <div className="inline-block me-3">
            <Button.danger variant="ghost">
              Danger Button
            </Button.danger>
          </div>
        </div>
      </section>
    </>
  )
}

export { ElementsButtons, buttonStyles, buttonOutlineStyles }