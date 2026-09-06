export const sectionNames=["hero","packages","benefits","teacher","featured","cta","faq","footer"] as const;
export type SectionKey=typeof sectionNames[number];
export type SectionSettings={visible:boolean;order:number};
export type SiteDesign={primaryColor:string;accentColor:string;backgroundColor:string;headingColor:string;textColor:string;fontSize:number;buttonRadius:number;cardRadius:number;sections:Record<SectionKey,SectionSettings>};
export const defaultDesign:SiteDesign={primaryColor:"#b348d0",accentColor:"#63267d",backgroundColor:"#fff7ff",headingColor:"#572067",textColor:"#80658a",fontSize:16,buttonRadius:18,cardRadius:25,sections:{hero:{visible:true,order:1},packages:{visible:true,order:2},benefits:{visible:true,order:3},teacher:{visible:true,order:4},featured:{visible:true,order:5},cta:{visible:true,order:6},faq:{visible:true,order:7},footer:{visible:true,order:8}}};
