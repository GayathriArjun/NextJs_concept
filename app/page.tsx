
import Link from 'next/link'
import Demo from './demo'
function Home(){
    return (
    <div>
      <Link href="/blog/first">Blog first</Link>
          <h1>hello everyone</h1>
      <Demo/>
    </div>
   ) 
}
export default Home