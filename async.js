async function mainsync() {
    await countup("a");
    await countup("b");
    await countup("c");
}

function mainasync() {
    countup("a");
    countup("b");
    countup("c");
}

async function countup(id_) {
    for (let i = 1; i < 4; i++) {
        await calc(id_, i);
    }
}

function calc(id_, msg) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById(id_).innerHTML += msg;
            resolve();
        }, 500);
    });
}
