import styles from './styles'

export const getUser = (data) => {
  return data.edges.map(user => {
    return (
      <ul style={styles.comments}>
        <li><strong>{user.node.owner.username}</strong>{user.node.text}</li>
      </ul>
    )
  })
}

export function getProfileUser (data) {
  return data.owner.username
}
