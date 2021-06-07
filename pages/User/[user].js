import { useRouter} from "next/router"; //query parameter 사용을 위해 불러옴

const User =()=>{
    const router = useRouter();
    const {user} = router.query; // url 쿼리에 존재하는 user의 값을 가져온다. [user].js 와 user 대응
    
    return <h3>사용자 이름은 : {user} </h3>
}

export default User
