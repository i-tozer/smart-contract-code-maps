# Notes

- Every box is a point (x,y) and a vector (width, height)
- There are two types of boxes: text_boxes, group_boxes
- We will probably focus on visualizing Contracts and Libraries. Interfaces TBD.

## General Process

### Traverse the repository and categorise

Traverse the repository to determine the order of the paint. Assign group ids. Groups will contain an array of group ids.

#### Traversal Flow

 1) Look for the deepest/most-nested group - log it.
 2) Go 1 level up, look for any other nested groups
    - If not group, log the parent of the above, and the log parent's siblings and return to step 1
    - If yes, traverse to the most-nested log, and bubble up, until everything is logged up until the parent, then return to step 1
        - as the group expands, be prepared to shift the entire unit right, down, left, up, depending on the spacing requirements.

### First paint

1) In order as determined above, add new boxes.

- Start at point (0,0)
- Iterate through directions RIGHT, DOWN, LEFT, UP. (*First paint will look like a big +. The layout will improve when the FDA algo gets applied after.*) and generate the next box with XYZ spacing between the closest point of the neightbour in the given direction. If there is not enough space, check the entire group in the 'open' direction, to allow for that space.
- At least one group will not contain a group_box element.
- When a group is complete, box it, based on co-ordinates with XYZ spacing away from the furthest point left,right,up,down of any co-ordinate in that group. Before committing to the box, check that the box has XYZ spacing away from it's nearest neighbour. This will be a common issue when there is alot of deeply nested contracts.

### Force Directed Algorithm

TBD based on results of the above.

#### Options

##### Fructerman-Reingold

f-attraction(d) = d^2/k
f-repulsion(d) = -k^2/d

all nodes repulse, adjacent nodes attract

##### Kamada and Kawai

$k_{i,j} = \frac{K}{d_{i,j}^2}$

E = $\sum_{i=1}^{n-1} \sum_{j=i+1}^{n} \frac{1}{2} k_{i,j} \left[{(x_i - x_j)^2 + (y_i - y_j)^2 + l_{i,j}^2} - 2l_{i,j}\sqrt{(x_i - x_j)^2 + (y_i - y_j)^2} \right].$

##### Other

- Gajer
- Lombardi Drawings for Curvature

### TBD

- How to contrain the FDA based on the groupings
- Still yet to define for the contract external call mapping is generated (i.e. from solidity parser to graph structure)
