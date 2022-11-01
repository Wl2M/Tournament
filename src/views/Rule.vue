<template>
    <div>
        <section id="rules">
            <h3>Rule</h3>
            <div>
                <a href="#rule" id="view-btn">View</a>
                <a href="#" id="download-btn">Download</a>
            </div>
        </section>


        <div id="rule">
            <div>
                <h2>กฏกติกา ****</h2>
                <p>
                    *****<br><br>

                    *****<br><br>

                    *****<br><br>

                    *****<br><br>

                    *****<br><br>

                    *****<br><br>

                    *****<br><br>

                    *****<br><br>

                    *****<br><br>

                    *****<br><br>
                </p>

                <h2>*****</h2>
                <P>
                    *****<br><br>

                    *****<br><br>

                    *****<br><br>

                    *****<br><br>
                </p>

                <h2>*****</h2>
                <p>
                    *****<br><br>
                    *****<br><br>
                    *****<br><br>
                    *****<br><br>
                    *****<br><br>
                    *****<br><br>
                    *****<br><br>
                    *****<br><br>
                </p>
            </div>
        </div>
    </div>
</template>



<style>
section {
    min-height: calc(100vh - 84.8px);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}


section a {
    font-size: 2em;
    color: #cecece;
    padding: 10px 20px;
    padding-top: 15px;
    transition: all 0.3s ease-out;
    border: 2px solid #cecece;
    border-radius: 40px;
    margin: 0px 15px;
}

section h3 {
    color: black;
    font-size: 5.5em;
}

#rule {
    padding: 50px;
}

#rule div {
    background: gray;
    padding: 40px 80px;
    border-radius: 80px;
}

#rule div h2 {
    font-size: 2em;
    text-decoration: underline;
    margin-bottom: 20px;
}

#rule div p {
    font-size: 1.2em;
}


#view-btn {
    background: black;
}

#view-btn:hover {
    background: gray;
    border: 2px solid black;
}

#download-btn {
    background: black;
}

#download-btn:hover {
    background: gray;
    border: 2px solid black;
}

</style>