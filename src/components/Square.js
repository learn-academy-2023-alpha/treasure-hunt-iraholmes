import React from "react"

const Square = ({value, index, handleGamePlay}) => {
  const handleClick = () => {
    handleGamePlay(index)
  }
  
  return (
    <>
      <div className="square" onClick={handleClick}>
      {value}
      </div>
      <Button 
    title='reset'
    style={styles.button}
    onPress={this.reset}
    >
</Button>
    </>
  )
}
export default Square
