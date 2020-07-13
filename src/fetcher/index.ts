import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

class Fetcher {
  public static instance: Fetcher;
  #apiKey = process && process.env?.API_KEY;
  #baseURL = 'https://min-api.cryptocompare.com';

  /**
   * Get fetcher instance
   * Can be usefull if we implement some methods to change the language on the fly
   * on the client side
   *
   * @static
   * @returns
   * @memberof Fetcher
   */
  public static getInstance() {
    if (!Fetcher.instance) {
      Fetcher.instance = new Fetcher();
    }

    return Fetcher.instance;
  }

  /**
   * @method getAsync
   *
   * @template T shape of the expected return type
   * @template E shape of the error (usually just a string)
   * @param {{ path: string; params?: string }} urlOptions
   * @param {(Omit<AxiosRequestConfig, 'baseURL' | 'url'>)} [options]
   * @returns {(Promise<AxiosResponse<T> | AxiosError<E>>)}
   * @memberof Fetcher
   */
  public async getAsync<T, E = unknown>(
    urlOptions: { path: string; params?: string },
    options?: Omit<AxiosRequestConfig, 'baseURL' | 'url'>,
  ): Promise<AxiosResponse<T>> {
    const { path, params } = urlOptions;

    try {
      if (!path) {
        throw new Error('An path must be passed to the getAsync method');
      }

      const url = `${path}${params ? `?${params}` : ''}`;
      const response: AxiosResponse<T> = await axios.get<T>(url, {
        ...options,
        headers: {
          authorization: `Apikey ${this.#apiKey}`,
        },
        baseURL: this.#baseURL,
      });

      return response;
    } catch (err) {
      console.log({ err });
      const error = err as AxiosError<E>;
      throw error;
    }
  }
}

export default Fetcher;
