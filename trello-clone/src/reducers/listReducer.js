const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: '0--0 В этой статье рассмотрим создание drag-and-drop элементов на React с помощью библиотеки react-beautiful-dnd от Atlassian. Статья рассчитана на людей, знакомых с React.'
                
            },
            {
                id: 1,
                text: '1--1 В этой статье рассмотрим создание drag-and-drop элементов на React с помощью библиотеки react-beautiful-dnd от Atlassian. Статья рассчитана на людей, знакомых с React.'
                
            }
        ]
    },
    {
        title: "This Episode-2",
        id: 0,
        cards: [
            {
                id: 0,
                text: '0--0++ В этой статье рассмотрим создание drag-and-drop элементов на React с помощью библиотеки react-beautiful-dnd от Atlassian. Статья рассчитана на людей, знакомых с React.'
                
            },
            {
                id: 1,
                text: '1--1++ В этой статье рассмотрим создание drag-and-drop элементов на React с помощью библиотеки react-beautiful-dnd от Atlassian. Статья рассчитана на людей, знакомых с React.'
                
            },
            {
                id: 2,
                text: '2--2++ В этой статье рассмотрим создание drag-and-drop элементов на React с помощью библиотеки react-beautiful-dnd от Atlassian. Статья рассчитана на людей, знакомых с React.'
                
            }
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default listReducer;
