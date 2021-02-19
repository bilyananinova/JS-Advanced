<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sticky Notes</title>
    <script src="https://code.jquery.com/jquery-3.1.0.min.js"
            integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="
            crossorigin="anonymous"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            font-family: arial, sans-serif;
            font-size: 100%;
            margin: 3em;
            background: #2a61f5;
            color: white;
            font-weight: bolder;
        }

        #sticker-list, #note-content {
            margin: 1em;
            float: left;
            position: relative;
        }

        .btn {
            padding-left: 50px;
        }

        /*an X button style*/
        li .button {
            font-size: 18px;
            margin-left: 160px;
            position: relative;
            bottom: 10px;
        }


        .note-content {
            list-style: none;
            text-decoration: none;
            color: #000;
            background: #ffc;
            height: 10em;
            width: 10em;
            padding: 1em;
            box-shadow: 5px 5px 7px rgba(33, 33, 33, .7);
            display:inline-block;
            margin-right: 20px;
            margin-top: 10px;
        }

        .text div {
            margin: 15px 0;
        }

        #add-sticker {
            padding: 8px 12px;
            border: none;
            border-radius: 10px;
            color: #2a61f5;
            font-weight: bolder;
            font-family: arial, sans-serif;
            background-color: white;
        }

        hr {
            margin: 0.5em 0;
        }

        p{
            word-wrap: break-word;
        }

    </style>
</head>
<body>
<div class="text">
    <div class="title-input">
        <label>Title: </label>
        <input class="title" maxlength="11">
    </div>
    <div class="text-input">
        <label>Text: </label>
        <input class="content" maxlength="102">
    </div>
</div>
<div class="btn">
    <button id="add-sticker" onclick="addSticker()"> Add new sticker</button>
</div>
<div class="stickerBoard">
    <ul id="sticker-list"></ul>
</div>
<script src="solution.js"></script>
</body>
</html>
