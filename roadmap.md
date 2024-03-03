# Proposed roadmap

## 1: Research, conceptual framework development and initial outreach

- **Community outreach**
- **Research on how to best visually represent Solidity interaction patterns in Excalidraw**: Special attention will be given to understanding the subtleties that differentiate developer intent from actual contract behaviour. Here we will determine:
  - What details are important to an auditor?
  - What complexity can be abstracted away?
  - What features are a must?
- **Develop a conceptual framework to accurately and intuitively represent interactions**: This framework aims to develop a strategy for how technical aspects can be visually represented in the Excalidraw architectural maps, ensuring that the maps accurately reflect the security and access layers of the contracts, with particular focus on:
  - **External Contract Calls & Interfaces**: We can take a lot of inspiration from existing Consensys tools that parse Solidity, analyse the Abstract Syntax Tree (AST) and generate useful output via the VSC plugin.
  - **Library usage**: How does the AST differ when functions are implemented by a Library vs. Contract?
  - **Protocol Entry Points, Modifiers, and Require Checks**: How does the AST handle function modifiers and require checks that dictate access and conditions for contract interaction? Is it safe to assume that if: a) the function modifies state, and b) there aren't any address-related modifiers, require, or assert checks on msg.sender, that this function is a user "entry-point" into the protocol.
  - **Read-only functions, state modifying functions, payable functions**: A lot has already been figured out by existing Consensys tools, but we still need to understand it.
  - **Mathematics behind the layout geometry**. To what extent can we use existing force-directed & constraint-based layout algorithms?
- **Excalidraw API and Obsidian Excalidraw plugin tooling**: Understand the tools available to use via Excalidraw API and other third-parties to determine how to build the prototype. We will put an emphasis on:
  - Researching the Excalidraw API for its capabilities in drawing and connecting shapes. We want to understand the limitations and explore potential workarounds for more complex layouts if necessary.
  - Understand the Obsidian Excalidraw plugin which despite its tighter integration challenges, offers advanced tooling capabilities such as providing more sophisticated layout options. Evaluate whether these enhanced features should be adapted to meet the project's needs.
- **Update our audience**: Update on findings

## 2: Prototype development, launch and feedback

- **Prototype development**: Create a functional prototype that visually maps Solidity contract
architectures on Excalidraw. The script will parse Solidity contracts, accurately identify and
represent the interactions, and visually map these interactions in Excalidraw, providing a clear
and intuitive understanding of the contracts' architecture. It must:

 1. Parse Solidity contracts for interactions
 2. Parse repository structure for placement
 3. Render the visual representation in Excalidraw:

- Implement logic within the script to translate the parsed contract interactions into visual elements that can be rendered in Excalidraw. This includes defining a set of visual conventions (e.g., shapes, lines, colours) to represent different types of contracts and interactions.
- Address the challenge of representing contract groupings and nesting in a manner that reflects the hierarchical and functional relationships implied by the folder structure and contract dependencies. This may involve developing a custom layout algorithm or adapting existing force-directed or constraint-based layout algorithms to suit the project's specific needs.
- **Content post**: Announce the prototype launch, discoveries to date and how to use the tool.
- **Outreach and feedback collection**: Feedback via forms, comments, and direct messaging.

## 3: MVP, launch and feedback

- **MVP development**: Evolve the prototype into a Minimum Viable Product (MVP) that fixes
inconsistencies, integrates crucial feedback from users, leverages TypeScript's capabilities for
robustness and maintainability, and improves functionality. The focus will be on:
  - Multi-level nesting: Enhancing its ability to accurately interpret and visually represent
 multi-level nesting within Solidity contracts.
  - Accounting for function call restrictions in modifiers, require and assert
 operations
  - Identification of “Protocol Entry Points”
  - Script execution that allows for manual intervention: Users should be able to
 manually adjust and refine the automated mappings.
  - Extensive testing
  - Clear documentation

- **Feedback collection from auditing teams, and others**:  Feedback on the tool's functionality, highlighting areas for improvement in accuracy and utility. Identify key areas for improvement, and prioritise changes that will have the most significant impact on the tool's effectiveness
- **Future planning:**
  - Reflect on the project to date and develop a plan for the project’s future.
  - Establish a soft roadmap for adding new features, such as support for additional programming languages, integration with other development tools, and scalability improvements to handle larger and more complex projects.
