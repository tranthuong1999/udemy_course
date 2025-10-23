

export function TabButton({ children, onSelect }) {
    console.log('TabButton rendered');
    return (
        <button onClick={onSelect}>
            {children}
        </button>
    )
}

// children là 1 props đặc biệt nó được truyền vào khi ta đặt nội dung giữa thẻ mở và thẻ đóng của 1 component