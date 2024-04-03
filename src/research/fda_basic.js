// Define the graph as a list of nodes and edges
const nodes = [
    { id: 0, x: Math.random() * 5000, y: Math.random() * 500 },
    { id: 1, x: Math.random() * 500, y: Math.random() * 500 },
    { id: 2, x: Math.random() * 500, y: Math.random() * 500 }
];

const edges = [
    { source: 0, target: 1 },
    { source: 1, target: 2 },
    { source: 2, target: 0 }
];

// Output the final positions of nodes
console.log("Initial node positions:");
nodes.forEach(node => {
    console.log(`Node ${node.id}: (${node.x.toFixed(2)}, ${node.y.toFixed(2)})`);
});


// Define parameters
const k = 0.1; // Constant for force calculation
const damping = 0.9; // Damping factor to prevent oscillations

// Initialize node velocities
nodes.forEach(node => {
    node.vx = 0;
    node.vy = 0;
});

// Perform iterations to simulate forces and update positions
for (let i = 0; i < 1000; i++) {
    // Calculate forces between nodes
    nodes.forEach(node => {
        node.fx = 0;
        node.fy = 0;

        nodes.forEach(otherNode => {
            if (node !== otherNode) {
                const dx = otherNode.x - node.x;
                const dy = otherNode.y - node.y;
                const distanceSquared = dx * dx + dy * dy;
                const distance = Math.sqrt(distanceSquared);
                const force = k / distanceSquared;

                node.fx += force * dx / distance;
                node.fy += force * dy / distance;
            }
        });
    });

    // Apply forces to update velocities and positions
    nodes.forEach(node => {
        node.vx += node.fx;
        node.vy += node.fy;
        node.vx *= damping;
        node.vy *= damping;
        node.x += node.vx;
        node.y += node.vy;
    });
}



// Output the final positions of nodes
console.log("Final node positions:");
nodes.forEach(node => {
    console.log(`Node ${node.id}: (${node.x.toFixed(2)}, ${node.y.toFixed(2)})`);
});
