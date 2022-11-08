import './index.css'

const Tabs = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const style = isActive ? 'active-btn' : 'btn'
  return (
    <button type="button" className={style} onClick={onClickTabItem}>
      {displayText}
    </button>
  )
}
export default Tabs
