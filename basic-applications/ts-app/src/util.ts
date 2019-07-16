/*
SPDX-License-Identifier: Apache-2.0
*/

import { URL } from 'url';


// Checks if URL is local
export const isLocalhostURL = (url: string): boolean => {
    const parsedURL: URL = new URL(url);
    const localhosts: string[] = [
        'localhost',
        '127.0.0.1',
    ];
    return localhosts.indexOf(parsedURL.hostname) !== -1;
};

// Used for determining whether to use discovery
export const hasLocalhostURLs = (profile: any): boolean => {
    const urls: string[] = [];
    for (const nodeType of ['orderers', 'peers', 'certificateAuthorities']) {
        if (!profile[nodeType]) {
            continue;
        }
        const nodes: any = profile[nodeType];
        for (const nodeName in nodes) {
            if (!nodes[nodeName].url) {
                continue;
            }
            urls.push(nodes[nodeName].url);
        }
    }
    return urls.some((url: string) => this.isLocalhostURL(url));
};
