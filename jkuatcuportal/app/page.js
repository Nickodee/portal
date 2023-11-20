import Link from "next/link"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row p-20">
      <div className="flex flex-col items-center justify-center w-3/4">
        <div className="flex flex-col">
          <label>Registration Number</label>
          <input type="text" placeholder="e.g sct210-0362/2020" className="p-2 rounded-md border outline-1 outline-red-200"/>
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input type="password" placeholder="enter your password" className="p-2 rounded-md border outline-1 outline-red-200"/>
        </div>
        <Link href="/forgotpassword">Forgot Password</Link>
        <button className="p-2 rounded-full w-[150px] text-xl text-bold bg-[#451515] text-center items-center text-white hover:bg-slate-500 hover:rounded-md">Sign In</button>
      </div>
      <div 
      className="w-1/4 h-40 bg-cover bg-center"
      style={{ backgroundImage: 'url("path/to/your/image.jpg")' }}>
        Hi
      </div>
    </main>
  )
}
