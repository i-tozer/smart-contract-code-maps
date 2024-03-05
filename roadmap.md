# Proposed roadmap

## 1: Research, conceptual framework development and initial outreach

- **Community outreach**
- **Research on how to best visually represent Solidity interaction patterns in Excalidraw**:  
  - What details are important to an auditor?
  - What complexity can be abstracted away?
  - Are we representative of intent without being misleading on implementation details? 
- **Develop a framework to represent interactions**: Ensuring that the maps reflect the security and access layers of the contracts, with focus on:
  - **External Contract Calls & Interfaces**: Take a lot of inspiration from existing Consensys tools that parse Solidity, analyse the Abstract Syntax Tree (AST) and generate useful output via the VSC plugin.
  - **Library usage**: How does the AST differ when functions are implemented by a Library vs. Contract?
  - **Protocol Entry Points, Modifiers, and Require Checks**: How does the AST handle function modifiers and require checks that dictate access and conditions for contract interaction? Is it safe to assume that if: a) the function modifies state, and b) there aren't any address-related modifiers, require, or assert checks on msg.sender, that this function is a user "entry-point" into the protocol.
  - **Read-only functions, state modifying functions, payable functions**: A lot has already been figured out by existing Consensys tools, but we still need to understand it.
  - **Mathematics behind the layout geometry**. To what extent can we use existing force-directed & constraint-based layout algorithms?
- **Excalidraw API and Obsidian Excalidraw plugin tooling**: Understand the tools available to use via Excalidraw API and other third-parties to determine how to build the prototype. We will put an emphasis on:
  - Researching the Excalidraw API for its capabilities in drawing and connecting shapes. We want to understand the limitations and explore potential workarounds for more complex layouts if necessary.
  - Understanding the Obsidian Excalidraw plugin which despite its tighter integration challenges, offers better tooling capabilities such as providing more layout options. Evaluate whether these extra features should be included.
- **Update our audience**: Update on findings

## 2: Prototype development, launch and feedback

- **Prototype development**: Create a prototype that visually maps Solidity contract architectures on Excalidraw. The script will parse Solidity contracts, accurately identify and represent the interactions, and visually map these interactions in Excalidraw, providing a clear and intuitive understanding of the contracts' architecture. It must:
   1. Parse Solidity contracts for interactions
   2. Parse repository structure for placement
   3. Render the visual representation in Excalidraw:
      - Address the challenge of representing contract groupings and nesting in a manner that reflects the hierarchical and functional relationships implied by the folder structure and contract dependencies. This may involve adapting existing force-directed or constraint-based layout algorithms.
- **Content post**: Announce the launch, discoveries to date and how to use the tool.
- **Outreach and feedback collection**: Feedback via forms, comments, and direct messaging.

## 3: MVP, launch and feedback

- **MVP development**: Evolve the prototype into a Minimum Viable Product (MVP) that fixes
inconsistencies, integrates user feedback, improves functionality. Focus on:
  - Multi-level nesting: Enhancing the ability to accurately interpret and visually represent
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
  - Establish a soft roadmap for adding new features, such as support for additional programming languages and integration with other development tools (i.e. IDEs).
