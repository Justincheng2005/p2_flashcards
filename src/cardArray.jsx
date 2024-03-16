const cardArray = [
    {
      name: "Array",
      definition:"An ___ is a number of elements in a specific order, typically all of the same type (depending on the language, individual elements may either all be forced to be the same type, or may be of almost any type). Elements are accessed using an integer index to specify which element is required. Typical implementations allocate contiguous memory words for the elements of ___ (but this is not always a necessity). ___ may be fixed-length or resizable."
    },
    {
        name: "Linked List",
        definition:"A ___ (also just called ____) is a linear collection of data elements of any type, called nodes, where each node has itself a value, and points to the next node in the ___. The principal advantage of a ___ over an array is that values can always be efficiently inserted and removed without relocating the rest of the ___. Certain other operations, such as random access to a certain element, are however slower on ___ than on arrays."
    },
    {
        name: "Stack",
        definition:"A ___ is an abstract data type that serves as a collection of elements with two main operations: push, which adds an element to the collection, and pop, which removes the most recently added element."
    },
    {
        name: "Queue",
        definition:"A ___ is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the ___, and the end at which elements are removed is called the head or front of the ____, analogously to the words used when people line up to wait for goods or services."
    },
    {
        name: "Record",
        definition:"A ___ (also called ___ or ___) is an aggregate data structure. A ___ is a value that contains other values, typically in fixed number and sequence and typically indexed by names. The elements of ___ are usually called fields or members. In the context of object-oriented programming, ___ are known as plain old data structures to distinguish them from objects."
    },
    {
        name: "Hash Table",
        definition:"___, also known as ___, are data structures that provide fast retrieval of values based on keys. They use a hashing function to map keys to indexes in an array, allowing for constant-time access in the average case. ____ are commonly used in dictionaries, caches, and database indexing. However, hash collisions can occur, which can impact their performance. Techniques like chaining and open addressing are employed to handle collisions."
    },
    {
        name: "Graphs",
        definition:"___ are collections of nodes connected by edges, representing relationships between entities. ___ can be used to model social networks, computer networks, and transportation networks, among other things. They consist of vertices (nodes) and edges (connections between nodes). ___ can be directed or undirected, and they can have cycles or be acyclic. ___ traversal algorithms include breadth-first search and depth-first search."
    },
    {
        name: "Tree",
        definition:"___ represent a hierarchical organization of elements. A ___ consists of nodes connected by edges, with one node being the root and all other nodes forming subtrees. ___ are widely used in various algorithms and data storage scenarios. Binary ___ (particularly heaps), AVL ___, and B-____ are some popular types. They enable efficient and optimal searching, sorting, and hierarchical representation of data."
    },
    {
        name: "Trie",
        definition:"A ___, also known as a prefix tree, is a specialized tree data structure used for the efficient retrieval of strings. ___ store characters of a string as nodes, with each edge representing a character. They are particularly useful in text processing scenarios like autocomplete, spell-checking, and dictionary implementations. ___ enable fast searching and prefix-based operations on strings."
    },
]

export default cardArray;