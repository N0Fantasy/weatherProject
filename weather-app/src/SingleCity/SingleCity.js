import React from "react"

import { Card } from "../Card/Card"

export const SingleCity = () => {
    const hrefEl = window.location.href.toString().split('/')
    const city = decodeURI(hrefEl[hrefEl.length - 1])
    return (
        <Card city={city} />
    )
}