const squareStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  export const Square = ({ children }) => {
    // const backgroundColor = black ? 'black' : 'white'
    // const color = black ? 'white' : 'black'
    const borderStyle = "solid";
    const borderWidth = "2px";
    return (
      <div
        style={{
          ...squareStyle,
          borderStyle,
          borderWidth,
        }}
      >
        {children}
      </div>
    )
  }
  