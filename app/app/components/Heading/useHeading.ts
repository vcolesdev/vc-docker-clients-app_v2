

export default function useHeading() {
  /**
   * handleHeadingSize
   * @param size
   * @description Handles the heading size
   */
  const handleHeadingSize = (size) => {
      let headingSize = "ca-headingSize--";
      switch (size) {
      case "h1":
          headingSize = `${headingSize}h1`;
          break;
      case "h2":
          headingSize = `${headingSize}h2`;
          break;
      case "h3":
          headingSize = `${headingSize}h3`;
          break;
      case "h4":
          headingSize = `${headingSize}h4`;
          break;
      case "h5":
          headingSize = `${headingSize}h5`;
          break;
      case "h6":
          headingSize = `${headingSize}h6`;
          break;
      default:
          headingSize = `${headingSize}h1`;
      }
      return headingSize;
  }
  
  const handleHeadingVariants = (variant) => {
      let headingVariant = "ca-headingVariant--";
      switch (variant) {
      case "h1":
          headingVariant = `${headingVariant}h1`;
          break;
      case "h2":
          headingVariant = `${headingVariant}h2`;
          break;
      case "h3":
          headingVariant = `${headingVariant}h3`;
          break;
      case "h4":
          headingVariant = `${headingVariant}h4`;
          break;
      case "h5":
          headingVariant = `${headingVariant}h5`;
          break;
      case "h6":
          headingVariant = `${headingVariant}h6`;
          break;
      default:
          headingVariant = `${headingVariant}h1`;
      }
      return headingVariant;
  }
  
  return {
      handleHeadingSize,
      handleHeadingVariants
  }
}