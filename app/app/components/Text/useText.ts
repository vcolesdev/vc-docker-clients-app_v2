import { EnumTextSize, EnumTextVariant, TextSize, TextVariant } from "./Text";

/**
 * useText
 * @description Handles the appearance and behavior of the Text Component
 */
export default function useText() {

  /**
   * handleTextSize
   * @param size
   * @description Handles the text size
   */
  const handleTextSize = (size: TextSize) => {
    let textSize = "ca-fontSize--";
    switch (size) {
      case EnumTextSize.footnote || "footnote":
        textSize = `${textSize}footnote`;
        break;
      case EnumTextSize.caption || "caption":
        textSize = `${textSize}caption`;
        break;
      case EnumTextSize.small || "small":
        textSize = `${textSize}small`;
        break;
      case EnumTextSize.base || "base":
        textSize = `${textSize}base`;
        break;
      case EnumTextSize.big || "big":
        textSize = `${textSize}big`;
        break;
      case EnumTextSize.lead || "lead":
        textSize = `${textSize}lead`;
        break;
      case EnumTextSize.subheading || "subheading":
        textSize = `${textSize}subheading`;
        break;
      case EnumTextSize.heading || "heading":
        textSize = `${textSize}heading`;
        break;
      case EnumTextSize.title || "title":
        textSize = `${textSize}title`;
        break;
      case EnumTextSize.display || "display":
        textSize = `${textSize}display`;
        break;
      case EnumTextSize.jumbo || "jumbo":
        textSize = `${textSize}jumbo`;
        break;
      default:
        textSize = `${textSize}base`;
    }
    return textSize;
  }

  const handleTextVariants = (variant: TextVariant) => {
    let textVariant = "ca-textVariant--";
    switch (variant) {
      case EnumTextVariant.footnote || "footnote":
        textVariant = `${textVariant}footnote`;
        break;
      case EnumTextVariant.caption || "caption":
        textVariant = `${textVariant}caption`;
        break;
      case EnumTextVariant.small || "small":
        textVariant = `${textVariant}small`;
        break;
      case EnumTextVariant.base || "base":
        textVariant = `${textVariant}base`;
        break;
      case EnumTextVariant.big || "big":
        textVariant = `${textVariant}big`;
        break;
      case EnumTextVariant.lead || "lead":
        textVariant = `${textVariant}lead`;
        break;
      case EnumTextVariant.subheading || "subheading":
        textVariant = `${textVariant}subheading`;
        break;
      case EnumTextVariant.heading || "heading":
        textVariant = `${textVariant}heading`;
        break;
      case EnumTextVariant.title || "title":
        textVariant = `${textVariant}title`;
        break;
      case EnumTextVariant.display || "display":
        textVariant = `${textVariant}display`;
        break;
      case EnumTextVariant.jumbo || "jumbo":
        textVariant = `${textVariant}jumbo`;
        break;
      default:
        textVariant = `${textVariant}base`;
    }
    return textVariant;
  }

  return {
    handleTextSize,
    handleTextVariants
  }
}