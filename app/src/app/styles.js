const styles = {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  },

  image: {
    order: '1',
    flex: '1 0 60%',
    alignSelf: 'flex-start',
    paddingTop: '50px',
    paddingBottom: '50px'
  },

  text: {
    order: '2',
    flex: '1 0 30%',
    alignSelf: 'flex-start',
    padding: '10px 30px 0px 30px'
  }
}

export default styles;