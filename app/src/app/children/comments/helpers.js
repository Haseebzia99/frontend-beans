import styles from './styles'

export const getUser = (data) => {
  return data.edges.map(user => {
    return (
      <ul key='{data}' style={styles.comments}>
        <li><strong style={styles.userName}>{user.node.owner.username}</strong>{user.node.text}</li>
      </ul>
    )
  })
}

export function getProfileUser (data) {
  return data.owner.username
}
