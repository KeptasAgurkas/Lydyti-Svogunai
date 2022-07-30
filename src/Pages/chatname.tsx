import { useNavigate } from '@tanstack/react-location'
import { SetStateAction, useState } from 'react'
export function Avatar(props: { name: string }) {
    return (
        <img
            src={`https://robohash.org/${props.name}`}
            alt="Icon"
            width="128"
            height="128"
        />
    )
}

function ChatName() {
    const [nick, setNick] = useState<string>('')
    function onChangeHandler(event: {
        target: { value: SetStateAction<string> }
    }) {
        setNick(event.target.value)
    }
    const navigate = useNavigate()
    return (
        <div className="flex h-screen w-full bg-gray-900 justify-center items-center">
            <div className="flex space-y-6 text-gray-200 flex-col justify-center items-center ">
                <div className="text-3xl font-bold uppercase">
                    Set your name
                </div>
                <div className="flex-row space-x-4">
                    <Avatar name={nick}></Avatar>
                    <input
                        type="text"
                        className="bg-gray-400 rounded focus:bg-white placeholder:text-white px-5 py-1 text-center focus:text-black font-"
                        placeholder="exp.: KeptasAgurkas"
                        value={nick}
                        onChange={onChangeHandler}
                    />
                    <button
                        className="border border-gray-800 bg-blue-900 rounded hover:bg-blue-700 px-2 py-1"
                        onClick={() => {
                            localStorage.setItem('user', nick)

                            navigate({ to: '/room-name/' })
                        }}
                    >
                        Confirm Chat-name
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatName