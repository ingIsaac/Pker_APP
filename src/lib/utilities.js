const express = require('express');

function sendStatusRenderString(code, text)
{
    return '<div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);text-align: center;"><h1 style=font-size:8vw;>' + code + '</h1><p style="font-size:2vw;">' + text + '</p></div>'
}

module.exports = {
    sendStatusRenderString
}