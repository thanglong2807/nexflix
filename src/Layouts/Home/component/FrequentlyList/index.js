import React, { useState } from 'react'
import Icon from "../../../../assets/icons/Frame.svg"
import "./style.css"
function FrequentlyList(props) {
  const [active, setActive] = useState('rotate-45-cw')
  const [show, setShow] = useState('slide-top')
  const [isActive, setIsActive] = useState(false)
  const handleShow = () => {
    setActive("")
    setIsActive(false)
    active ? setActive("") : setActive("rotate-45-cw")
    isActive ? setShow("slide-top") : setShow("slide-fwd-bottom")
    isActive ? setIsActive(false) : setIsActive(true)
  }
  return (
    <React.Fragment>
      <div>
        <div onClick={handleShow} className={`frequentlylist frequentlylist-hover `}>
          <h3 className='frequentlylist_title '>{props.data.title}</h3>
          <img src={Icon} alt='icon' className={`rotate-45-ccw ${active} `} />
        </div>
        <div className={`frequentlylist_item ${show}`}>
          <p className='frequentlylist_title'>{props.data.des}</p>

          {props.data.des2 ? (<p className='frequentlylist_title mgt-60'> Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà không gặp phải một quảng cáo nào – tất cả chỉ với một mức giá thấp hàng tháng. Luôn có những nội dung mới để bạn khám phá và những chương trình truyền hình, phim mới được bổ sung mỗi tuần!</p>) : null}
        </div>
      </div>
    </React.Fragment>
  )
}

export default FrequentlyList