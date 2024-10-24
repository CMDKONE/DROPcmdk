import { getEvmApi } from '@/utils/evmApi';
import { getChainInfo } from '@/utils/getChainInfo';
import {
  EvmAbiItem,
  EvmAddressInput,
  EvmChain,
} from '@moralisweb3/common-evm-utils';
import { Addresses } from 'drop-sdk';

interface Params {
  params: { address: string };
}

interface ProfileChangedFor {
  kontract: string;
  caller: string;
}

interface ProfileChangeForResponseJson {
  transaction_hash: string;
  address: string;
  block_timestamp: string;
  block_number: string;
  block_hash: string;
  data: ProfileChangedFor;
}

export async function GET(_request: Request, { params }: Params) {
  const evmApi = await getEvmApi();
  const chainInfo = getChainInfo();

  const chain = chainInfo.isTestnet ? EvmChain.MUMBAI : EvmChain.POLYGON;

  const profileAddress = chainInfo.isTestnet
    ? (Addresses.Profile.mumbai as EvmAddressInput)
    : '';

  const topic =
    '0x851e62abe600e90c07bdd93b1db315b32f32d4845f6cc42b28e6f1acb458eaee';

  const abi: EvmAbiItem = {
    type: 'event',
    name: 'ProfileChangedFor',
    inputs: [
      {
        name: 'kontract',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'caller',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  };

  try {
    const response = await evmApi.events.getContractEvents({
      address: profileAddress,
      chain,
      topic,
      abi,
    });

    const responses: ProfileChangeForResponseJson[] = response.toJSON()
      .result as ProfileChangeForResponseJson[];

    const events = responses.map((event) => {
      return event.data;
    });

    const filteredEvents = events.filter((event) => {
      return event.caller.toLowerCase() === params.address.toLowerCase();
    });

    const contractAddresses = filteredEvents.map((event) => {
      return event.kontract;
    });

    const uniqueContractAddressesSet = new Set(contractAddresses);
    const uniqueContractAddresses = Array.from(uniqueContractAddressesSet);

    return new Response(JSON.stringify(uniqueContractAddresses));
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify(e), { status: 400 });
  }
}
