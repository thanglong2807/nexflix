import React from 'react'
import FrequentlyList from '../component/FrequentlyList';
import { v4 as uuidv4 } from 'uuid';
import "./style.css"
function Frequently() {
    const data = [
        {
            id: uuidv4(),
            title: "What is Netflix?",
            des: "Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối Internet.",
            des2: "Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối Internet."
        },
        {
            id: uuidv4(),
            title: "How much does Netflix cost?",
            des: "Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối Internet.",
            des2: ""
        },
        {
            id: uuidv4(),
            title: "Where can I watch?",
            des: "Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối Internet.",
            des2: "Bạn cũng có thể tải xuống các chương trình yêu thích bằng ứng dụng trên iOS, Android hoặc Windows 10. Vào phần nội dung đã tải xuống để xem trong khi di chuyển và khi không có kết nối Internet. Mang Netflix theo bạn đến mọi nơi."
        },
        {
            id: uuidv4(),
            title: "How do I cancel?",
            des: "Netflix rất linh hoạt. Không có hợp đồng phiền toái, không ràng buộc. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai cú nhấp chuột. Không mất phí hủy – bạn có thể bắt đầu hoặc ngừng tài khoản bất cứ lúc nào.",
            des2: ""
        },
        {
            id: uuidv4(),
            title: "What can I watch on Netflix?",
            des: "Netflix có một thư viện phong phú gồm các phim truyện, phim tài liệu, chương trình truyền hình, anime, tác phẩm giành giải thưởng của Netflix và nhiều nội dung khác. Xem không giới hạn bất cứ lúc nào bạn muốn.",
            des2: ""
        },
        {
            id: uuidv4(),
            title: "Is Netflix good for kids?",
            des: "Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn, trao cho phụ huynh quyền kiểm soát trong khi các em có thể thưởng thức các bộ phim và chương trình phù hợp cho gia đình tại không gian riêng.",
            des2: "Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn, trao cho phụ huynh quyền kiểm soát trong khi các em có thể thưởng thức các bộ phim và chương trình phù hợp cho gia đình tại không gian riêng."
        },

    ]
    return (
        <div className='frequently'>
            <div className='container'>
                <div className='frequently_content'>
                    <h2 className='frequently_title'>Frequently Asked Questions</h2>
                    <div className='frequently_list'>
                        {data.map(item => <FrequentlyList key={item.id} data={item} />)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frequently