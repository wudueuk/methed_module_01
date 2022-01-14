'use strict';

import { listIPv4 } from './ipv4.js';
console.log('Length listIPv4: ', listIPv4.length);


const weakIp = new Set([...listIPv4.values()]);

console.log('weakIp: ', weakIp);
console.log('Size weakIp: ', weakIp.size);

