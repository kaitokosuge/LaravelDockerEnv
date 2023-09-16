import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import TimeLine from "@/Components/TimeLine";
import Icon from "@/Components/Icon";

const Mypage = (props) => {
    const { posts, user } = props;
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    { user.name }のマイページ
                </h2>
            }>
            <div>
                <Icon user={user}/>
                <h2>ステータスメッセージ</h2>
                <p>{ user.message }</p>
                <h2>フォローカテゴリのリスト</h2>
                <ul>
                    { user.categories.map((category) => (
                        <li> { category.name } </li>
                    )) }
                </ul>
            </div>
            
            <TimeLine posts={ posts }/>
            
        </Authenticated>
    );
}

export default Mypage;