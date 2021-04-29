import React from 'react'
import Modal from '../../../../modals/first_modal'
import { openModal } from '../../../../../actions/modal'
import {Link } from 'react-router-dom'


class ItemOptions extends React.Component{

    openModal(){
        this.props.open(this.props.video)
    }
    
    render(){
        return (
            <div className='test-div-2'>
                <Link to={`/video/${this.props.video.id}`}><img className="test" src={window.playButtonUrl} alt="" /></Link>
                <img className="test-2" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4b
                Wxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdo
                dD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0i
                Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxI
                iBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjE
                wIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13
                ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZT
                ogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMwM
                DAwMDAiPjxwYXRoIGQ9Ik04NiwxNC4zMzMzM2MtMzkuNTgxNSwwIC03MS42NjY2NywzMi4wODUxNyAtNzEuNjY2NjcsNzEuNj
                Y2NjdjMCwzOS41ODE1IDMyLjA4NTE3LDcxLjY2NjY3IDcxLjY2NjY3LDcxLjY2NjY3YzM5LjU4MTUsMCA3MS42NjY2NywtMzIu
                MDg1MTcgNzEuNjY2NjcsLTcxLjY2NjY3YzAsLTM5LjU4MTUgLTMyLjA4NTE3LC03MS42NjY2NyAtNzEuNjY2NjcsLTcxLjY2NjY3ek
                0xMTQuNjY2NjcsOTMuMTY2NjdoLTIxLjV2MjEuNWMwLDMuOTU2IC0zLjIxMDY3LDcuMTY2NjcgLTcuMTY2NjcsNy4xNjY2N3YwYy0zLjk
                1NiwwIC03LjE2NjY3LC0zLjIxMDY3IC03LjE2NjY3LC03LjE2NjY3di0yMS41aC0yMS41Yy0zLjk1NiwwIC03LjE2NjY3LC0zLjIxMDY3I
                C03LjE2NjY3LC03LjE2NjY3djBjMCwtMy45NTYgMy4yMTA2NywtNy4xNjY2NyA3LjE2NjY3LC03LjE2NjY3aDIxLjV2LTIxLjVjMCwtMy45N
                TYgMy4yMTA2NywtNy4xNjY2NyA3LjE2NjY3LC03LjE2NjY3djBjMy45NTYsMCA3LjE2NjY3LDMuMjEwNjcgNy4xNjY2Nyw3LjE2NjY3djIxLjVo
                MjEuNWMzLjk1NiwwIDcuMTY2NjcsMy4yMTA2NyA3LjE2NjY3LDcuMTY2Njd2MGMwLDMuOTU2IC0zLjIxMDY3LDcuMTY2NjcgLTcuMTY2NjcsNy4
                xNjY2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" />
                <button  className="open" onClick={() => this.openModal()}> open </button>
            </div>
        )
    }
}

export default ItemOptions