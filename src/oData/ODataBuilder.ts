import sequelize from "../Sequelize";
import Logger from "../utils/Logger";

 export default class ODataBuilder {

    private static logger = new Logger("ODataBuilder");

    public static filter(queryString: string): any {

        if (queryString == undefined || queryString === "") {
            return undefined;
        }

        const part: Array<string> = queryString.split(" ");

        const query: {[k: string]: any} = {};
        const queryPart: {[k: string]: any} = {};
        queryPart[part[1]] = part[2];
        query[part[0]] = queryPart;

        ODataBuilder.logger.debug(query.toString());
        return query;

    }

    public static expand(queryString: string): any {
        if (queryString == undefined || queryString === "") {
            return undefined;
        }

        return { model: sequelize.model(queryString) };
    }

    public static orderBy(queryString: string): any {


    }

 }