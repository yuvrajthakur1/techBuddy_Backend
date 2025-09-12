const sortingQuestions = [
  // Basics
  { questionText: "What is sorting in computer science?" },
  { questionText: "Why do we need sorting in programming?" },
  { questionText: "What are the real-world applications of sorting?" },
  { questionText: "What are the common types of sorting algorithms?" },
  { questionText: "What is the difference between internal and external sorting?" },
  { questionText: "What is the difference between stable and unstable sorting algorithms?" },
  { questionText: "What is the difference between in-place and out-of-place sorting algorithms?" },
  { questionText: "What is the lower bound of comparison-based sorting algorithms?" },
  { questionText: "What is the role of sorting in searching algorithms?" },
  { questionText: "What is the role of sorting in database indexing?" },

  // Elementary sorts
  { questionText: "What is Bubble Sort and how does it work?" },
  { questionText: "What is the time and space complexity of Bubble Sort?" },
  { questionText: "Why is Bubble Sort inefficient in practice?" },
  { questionText: "What is Insertion Sort and how does it work?" },
  { questionText: "What is the best-case time complexity of Insertion Sort?" },
  { questionText: "When is Insertion Sort efficient?" },
  { questionText: "What is Selection Sort and how does it work?" },
  { questionText: "What is the time complexity of Selection Sort?" },
  { questionText: "Why is Selection Sort not stable?" },
  { questionText: "Compare Bubble Sort, Insertion Sort, and Selection Sort." },

  // Merge Sort
  { questionText: "What is Merge Sort and how does it work?" },
  { questionText: "What is the time complexity of Merge Sort?" },
  { questionText: "What is the space complexity of Merge Sort?" },
  { questionText: "Why is Merge Sort considered stable?" },
  { questionText: "Why is Merge Sort good for linked lists?" },
  { questionText: "Why is Merge Sort not used for arrays in practice?" },
  { questionText: "Is Merge Sort an in-place algorithm?" },
  { questionText: "What is the recursive nature of Merge Sort?" },
  { questionText: "How does Merge Sort perform on nearly sorted data?" },
  { questionText: "What is the difference between top-down and bottom-up Merge Sort?" },

  // Quick Sort
  { questionText: "What is Quick Sort and how does it work?" },
  { questionText: "What is a pivot in Quick Sort?" },
  { questionText: "What are different pivot selection strategies?" },
  { questionText: "What is the best-case complexity of Quick Sort?" },
  { questionText: "What is the worst-case complexity of Quick Sort?" },
  { questionText: "What causes the worst case in Quick Sort?" },
  { questionText: "How can we avoid the worst case in Quick Sort?" },
  { questionText: "Why is Quick Sort usually faster than Merge Sort in practice?" },
  { questionText: "Is Quick Sort a stable algorithm?" },
  { questionText: "How does tail recursion optimization help Quick Sort?" },

  // Heap Sort
  { questionText: "What is Heap Sort and how does it work?" },
  { questionText: "What data structure is used in Heap Sort?" },
  { questionText: "What is the time complexity of Heap Sort?" },
  { questionText: "Is Heap Sort stable?" },
  { questionText: "Why is Heap Sort considered in-place?" },
  { questionText: "Compare Heap Sort and Merge Sort." },
  { questionText: "Compare Heap Sort and Quick Sort." },
  { questionText: "When should Heap Sort be preferred?" },
  { questionText: "What is the process of heapify in Heap Sort?" },
  { questionText: "Why is Heap Sort not often used in practice?" },

  // Non-comparison sorts
  { questionText: "What is Counting Sort and how does it work?" },
  { questionText: "What is the time complexity of Counting Sort?" },
  { questionText: "Why is Counting Sort not comparison-based?" },
  { questionText: "What are the limitations of Counting Sort?" },
  { questionText: "What is Radix Sort and how does it work?" },
  { questionText: "What is the complexity of Radix Sort?" },
  { questionText: "Why does Radix Sort depend on Counting Sort or Bucket Sort?" },
  { questionText: "What are the advantages of Radix Sort?" },
  { questionText: "What are the limitations of Radix Sort?" },
  { questionText: "What is Bucket Sort and how does it work?" },

  // Stability and Properties
  { questionText: "Which sorting algorithms are stable?" },
  { questionText: "Which sorting algorithms are unstable?" },
  { questionText: "Why is stability important in sorting?" },
  { questionText: "What is adaptive sorting?" },
  { questionText: "Which algorithms are adaptive?" },
  { questionText: "How does sorting handle duplicate values?" },
  { questionText: "What is the effect of sorting on memory usage?" },
  { questionText: "What is the importance of partitioning in Quick Sort?" },
  { questionText: "What are best use cases of stable sorts?" },
  { questionText: "What is the trade-off between time and space in sorting?" },

  // Practical considerations
  { questionText: "Which sorting algorithm is used in C++ STL sort()?" },
  { questionText: "Which sorting algorithm is used in Java’s Arrays.sort()?" },
  { questionText: "Which sorting algorithm is used in Python’s sorted()?" },
  { questionText: "What is Timsort?" },
  { questionText: "Why is Timsort efficient in real-world scenarios?" },
  { questionText: "What is hybrid sorting?" },
  { questionText: "What are examples of hybrid sorting algorithms?" },
  { questionText: "Why are hybrid algorithms used in standard libraries?" },
  { questionText: "What sorting algorithm works best for small datasets?" },
  { questionText: "What sorting algorithm works best for large datasets?" },

  // Advanced concepts
  { questionText: "What is external sorting?" },
  { questionText: "What is the difference between internal and external sorting?" },
  { questionText: "Why is external sorting needed for very large datasets?" },
  { questionText: "How does external Merge Sort work?" },
  { questionText: "What is parallel sorting?" },
  { questionText: "What is distributed sorting?" },
  { questionText: "What role does sorting play in big data processing?" },
  { questionText: "What is the role of sorting in databases?" },
  { questionText: "What are cache-friendly sorting algorithms?" },
  { questionText: "What is the significance of sorting lower bounds?" },

  // Comparisons & Theory
  { questionText: "Compare Bubble Sort and Insertion Sort." },
  { questionText: "Compare Merge Sort and Quick Sort." },
  { questionText: "Compare Quick Sort and Heap Sort." },
  { questionText: "Compare Radix Sort and Counting Sort." },
  { questionText: "Compare external and internal sorting." },
  { questionText: "Why can't comparison-based sorting beat O(n log n)?" },
  { questionText: "When should you use non-comparison sorts over comparison sorts?" },
  { questionText: "What is the effect of input order on sorting performance?" },
  { questionText: "What is the impact of sorting on time-sensitive systems?" },
  { questionText: "How do sorting algorithms affect memory hierarchy performance?" }
];


module.exports = sortingQuestions;