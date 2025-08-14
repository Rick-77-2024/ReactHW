
import React from "react";

const ComplexPage = () => {
    return (
        <div>
            <h1>Complex Page</h1>
            {/* Ваш контент */}
        </div>
    );
};

export default ComplexPage;


// import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
// import {commentSliceActions} from "../redux/slices/commentSlice/commentSlice.ts";
// import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
// import {useEffect} from "react";

// export const CommentsPage = () => {
//     const {comments, loadState} = useAppSelector(({commentSlice})=>commentSlice);
//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         dispatch(commentSliceActions.loadComments());
//     }, [dispatch])

//     return (
//         <div>
//             {!loadState && <div>Loading</div>}
//             {comments.map((comment) => {
//                 return <div key={comment.id}>{comment.name}</div>
//             })}
//         </div>
//     );
// };
