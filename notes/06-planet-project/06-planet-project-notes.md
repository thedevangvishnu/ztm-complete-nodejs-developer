# 06 - PLANET PROJECT

## 6.1 - Streams and Stream API of Nodejs

- A "stream" is a sequence of data elements that are made avaiable over time.

- It is inefficient to load entire datasets into memory and then process it. Streams allow to break this large dataset into smaller, more managable "chunks" of data elements, which are processed as they are made available, even if the entire dataset is not loaded completely.

- Characteristics of streams:

  - Sequential data flow: Streams allow data elements to flow in a "one-after-the-other" fashion, enabling a sequential and continous flow of data.
  - Event-driven: Streams also emit events. "data" event when new data is available, "end" when stream is done loading entire dataset, "error" when error has occurred.
  - Piping: Streams can be conntected together in way, such that the output from one stream can directly become the input for the second stream.
  - Buffering: Sreams can use a functionality called "buffer" that allow to store those chunks of data that have been made available, while the rest of the dataset if being loaded.

- Sream API in Nodejs is a set of modules and classes that allow to handle and manage streams effectively. Down below are the general types of streams that are also present in the stream api of nodejs (allow mentioned are the important methods)

- Types of streams:
  - Readable stream:
    - Sources of data where you can read from.
    - e.g. - Reading from a file, receiving data over a network, user inputs.
    - Methods: read(), pipe(), on("data"), on("error"), on("end")
  - Writable stream:
    - Destination where you can write data.
    - e.g. - Writing to a file, seding data over a network, displaying output to the user.
    - Methods: write(), end(), on("finish"), on("error").
  - Duplex stream:
    - Streams that are both readable and writable.
    -
  - Transform stream:
    - Special type of duplex stream that can be transformed (modified: compressed, parsed, encrypted) while they are read or written.
    - Method: transform(chunk, encoding, callback)
