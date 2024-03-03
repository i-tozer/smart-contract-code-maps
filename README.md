# Interactive and Intuitive Smart Contract Code Maps (or Protocol Architecture Maps)

## What Is This Project About?

The project aims to develop a script that generates an intuitive and interactive smart contract architecture map for any Solidity-based repository. The output will be in JSON format and saved as a `.excalidraw` file. Excalidraw is an open-source, interactive, and virtual whiteboard tool that has gained popularity for its integration into a variety of software platforms, including Visual Studio Code (VSC), Obsidian, CodeSandbox, Notion, and more.

### Project Goals

The main goal is to produce diagrams similar to the examples below:

- **Velvet Capital:** [View Example](https://github.com/cryptoTozer/examples/blob/main/velvet-capital.png)
- **Autonolas / Olas:** [View Example](https://github.com/code-423n4/2023-12-autonolas/blob/main/registries/docs/On-chain_architecture_v6.png)

### Notable Features of the Output

1. **Contract Interactions:** Highlights contract-to-contract interactions, especially functions that modify state and/or are payable.
2. **Entry Points:** Shows where the entry points to the protocol are and who can call those given functions.
3. **Contract Interactions Inference:** Infers what contract-to-contract interactions are made, without featuring interfaces.
4. **Contract Distribution:** Distributes contracts in a force-directed manner, yet constrained by the sub-folders in which the contracts are found (e.g., “contract/core/Exchange.sol”).

### How It Works

The script will accept a list of Solidity files as input, parse the code, and process the data to output an Excalidraw file. When opened in Excalidraw, this file will render to an architectural map of the given contracts.

### Interactivity and Integration

The code maps are fully interactive, allowing users to annotate, color, make notes, create and delete elements, drag and drop code snippets, and more—all within the same file.

With Excalidraw's integration in popular IDEs such as VSC and IntelliJ, onboarding can be relatively frictionless. Additionally, the `.excalidraw` files are exportable as SVGs and PNGs, further enhancing the utility of the output. For instance, a developer can run the script, make some edits, then export it to SVG for use in protocol documentation.

## What problem is the project trying to address?

The main aim of the project is to accelerate the "context phase" for anyone wishing to engage with a given protocol.

This is a well-known problem for auditors, as highlighted by [Daniel from Guardian Audits on Twitter](https://twitter.com/dannygfromnyc/status/1751652011844513979).

## Why is the project important?

Smart contract auditors need to gain an understanding of how a protocol works as quickly as possible. This process is time-sensitive because audits are almost always time-bound. Many auditors compete in time-bound audits of complex protocols multiple times a month. Therefore, accelerating the "context phase" of the audit is crucial. I know this from personal experience, having participated in various audits throughout 2023 and 2024.

Code maps are useful to auditors and users for a number of reasons:

1. They reduce the amount of time it takes to understand a protocol.
2. They serve as a launch pad for deep-dives.
3. They are visually engaging, complementing the reading of docs and source code.
4. They allow for quick re-contextualization after distractions, offering a high-level view not available from docs or code alone.
5. Their importance increases with the complexity and size of the codebase.
6. Beyond logic, great conceptual and technical diagrams also represent an art form.
7. Beautifully designed code maps can serve as valuable marketing tools for the protocols themselves.
8. Conceptual diagrams clarify the **what**—what a protocol does and the specific features it offers.
9. Technical diagrams explain the **how**—how the protocol is architected, including external calls, entry-points, third-party integrations, and inheritance, as well as the workings of specific call flows.
10. Comprehensive documentation caters to all learning styles—Visual, Read/Write, Auditory, and Kinesthetic. Code maps address the visual-spatial learning style.

## What Other Solutions Exist?

One of the most similar tools to our project is **Surya** by Consensys, which is integrated into the **Solidity Visual Developer** plugin for Visual Studio Code (VSC). This plugin offers multiple features that aid in understanding the workings and interactions of a set of smart contracts.

### Features of Solidity Visual Developer

- The plugin allows the creation of various graphs mapping out contract interactions, which are viewable within the IDE and can be exported as `.svg` or `.dot` files.
- Within the IDE, the graphs are partially interactive, allowing users to click on a function to filter out irrelevant calls.
- It includes a feature to generate a top-level "Contract Interaction Graph", which is similar to what our project aims to achieve.

### Comparing Outputs

- **Consensys’ Solidity Visual Developer Output:** [View Surya Output Example](https://github.com/cryptoTozer/examples/blob/main/velvet-capital-surya.png)
- **Excalidraw Architectural Map Protocol (Our Product):** [View Our Output Example](https://github.com/cryptoTozer/examples/blob/main/velvet-capital.png)

Our architectural map aims to provide more intuitive structuring and highlights important functions and entry points to the protocol, making it more useful for initial context.

### Current Practices

Most auditors currently gain "code context" by skimming through the source code, revisiting documentation, and making notes in markdown files. For abstract understanding or explanation, they often turn to virtual whiteboards, creating diagrams and schematics from scratch. Sometimes, these diagrams are published later, as seen in Consensys' system diagram of Lybra Finance: [View Lybra Finance System Diagram](https://consensys.io/diligence/audits/2023/08/lybra-finance/#system-diagram).

### Other Experimentations

Beyond architectural maps, there has been experimentation with **GooseCode** for a "searchable code canvas", appealing to a visual-spatial experience. However, this is not an architectural map but shares the idea of enhancing visual understanding of code.

- **GooseCode:** [See Tweet](https://twitter.com/bytes032/status/1754520847593636091)
