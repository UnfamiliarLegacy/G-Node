import { Extension, GHeightMap, HDirection, HFloorItem, HPacket, HWallItem } from '../index.js';
import { readFile } from 'fs/promises';
import { HNavigatorSearchResult } from "../lib/extension/parsers/navigator/hnavigatorsearchresult.js";

const extensionInfo = JSON.parse(
    await readFile(
        new URL('./package.json', import.meta.url)
    )
);

const ext = new Extension(extensionInfo);
ext.run();


ext.interceptByNameOrHash(HDirection.TOCLIENT, 'NavigatorSearchResultBlocks', onNavigatorSearchResultBlocks)

function onNavigatorSearchResultBlocks(message) {
    let result = new HNavigatorSearchResult(message.getPacket());
    console.log(result);
    console.log(result.blocks);
}

