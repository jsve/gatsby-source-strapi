import createNodeHelpers from 'gatsby-node-helpers'

const { createNodeFactory } = createNodeHelpers({
  typePrefix: 'StrapiBlog',
})

export const Node = (type, node) =>
  createNodeFactory(type, node => {
    node.id = `Blog${type}_${node.strapiBlogId}`
    return node
  })(node)
