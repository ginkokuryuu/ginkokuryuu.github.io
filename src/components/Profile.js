import React from 'react'
import style from '../css-modules/ProfileStyle.module.css'

export default function Profile() {
    return (
        <div class={style.profileBox}>
            <div class={style.name}>
                <div>
                    nur muhammad husnul
                </div>
                <div class={style.habib}>
                    habib
                </div>
                <div>
                    yahya
                </div>
            </div>
            <div class={style.divider}>

            </div>
        </div>
    )
}
