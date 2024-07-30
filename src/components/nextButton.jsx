import React from 'react';
// Вместо создания нескольких кнопок, можно было создать одну с различными вариантами. Вариант передавать через пропы

// Если ты делаешь компонент только со стилизацией, то желательно давать возможность передавать пропы нативного компонента

// function NextButton({ children, ...props })
// <button className="next-button" {...props}>{children}</button>

function NextButton({onClick}) {

    return (
        // <> Лишние здесь
        <>
            <button onClick={onClick} className="next-button">ДАЛЕЕ</button>
        </>
    )
}

export default NextButton