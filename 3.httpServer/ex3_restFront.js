async function getUser(){ //로딩 시 사용자의 정보를 가져오는 함수
    try {
        const res = await axios.get('/users');
        const users = res.data;
        const list = document.getElementById('list');
        list.innerHTML='';

        // 사용자마다 반복적으로 화면 표시 및 이벤트 연결
        Object.keys(users).map(function (key){
            console.log("key",key);
            const userDiv = document.createElement('div');
            const span = document.createElement('span');
            span.textContent = users[key];
            const edit = document.createElement('button');
            edit.textContent='수정';
            edit.addEventListener('click', async()=>{
                const name = prompt('바꿀 이름을 입력하세요.');
                if(!name){
                    return alert('이름을 반드시 입력하셔야 합니다.');
                }
                try {
                    await axios.put('/user/'+key, {name});
                    getUser();
                } catch (error) {
                    console.error(error);
                }
            });
            const remove = document.createElement('button');
            remove.textContent = '삭제';
            remove.addEventListener('click', async () => {
                try {
                    await axios.delete('/user/'+key);
                    getUser();
                } catch (error) {
                    console.log(error);
                }
            });
            userDiv.appendChild(span);
            userDiv.appendChild(edit);
            userDiv.appendChild(remove);
            list.appendChild(userDiv);
            console.log(res.data);
        });
    } catch (error) {
        console.log(error);
    }
}

window.onload = getUser;

document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    if(!name){
        return alert('이름을 입력하세요');
    }
    try {
        await axios.post('/user',{name});
        getUser();
    } catch (error) {
        console.error(error);
    }
    e.target.username.value='';
});