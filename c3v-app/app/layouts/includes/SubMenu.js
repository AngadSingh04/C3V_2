'use client'

export default function SubMenu() {

    const menuItems = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Electronics' },
        { id: 3, name: 'Fashion' },
        { id: 4, name: 'Collectables and Art' },
        { id: 5, name: 'Sports' },
        { id: 6, name: 'Health & Beauty' },
        { id: 7, name: 'Sell' },
    ]

    return (
        <>
            <div id="SubMenu" className="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul 
                        id="TopMenuLeft"
                        className="
                            flex 
                            items-center 
                            text-[15px] 
                            text-[#333333]
                            px-2 
                            h-8
                        "
                    >
                        {menuItems.map(item => (
                            <li key={item.id} className="px-3 hover:underline cursor-pointer">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
  }
  