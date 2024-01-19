/**
 * useList.ts
 */
export default function useList() {
      const listItems = {
        ul: ["Item 1", "Item 2", "Item 3"],
        ol: ["Item 1", "Item 2", "Item 3"],
        dl: [
          { 
            "title": "Term 1", 
            "description": "Definition 1" 
          }, 
          { 
            "title": "Term 2", 
            "description": "Definition 2" 
          }, 
          { 
            "title": "Term 3", 
            "description": "Definition 3"
          }
        ]
      }
    
    return { listItems }
}