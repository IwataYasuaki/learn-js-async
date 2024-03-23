function main1() {
    countup("a");
    countup("b");
    countup("c");
}

async function main2() {
    await countup("a");
    countup("b");
    countup("c");
}

async function main3() {
    countup("a");
    await countup("b");
    countup("c");
}

async function main4() {
    countup("a");
    countup("b");
    await countup("c");
}

async function main5() {
    await countup("a");
    await countup("b");
    countup("c");
}

async function main6() {
    await countup("a");
    countup("b");
    await countup("c");
}

async function main7() {
    countup("a");
    await countup("b");
    await countup("c");
}

async function main8() {
    await countup("a");
    await countup("b");
    await countup("c");
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
