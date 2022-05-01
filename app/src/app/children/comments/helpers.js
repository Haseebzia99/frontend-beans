import styles from './styles';

export const getUser = (data) => {
  return data.edges.map(user => {
    return (
      <ul style={styles.comments}>
        <li key={user.node.owner.id}>
          <strong style={styles.userName}>
            {user.node.owner.username}
          </strong>
          {user.node.text}
        </li>
      </ul>
    )
  })
}

export function getProfileUser (data) {
  return data.owner.username
}
