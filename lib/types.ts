interface MemeExample {
    text: string[];
    url: string;
}

export interface MemeTemplate {
    id: string;
    name: string;
    lines: number;
    overlays: number;
    styles: string[];
    blank: string;
    example: MemeExample;
    source?: string; // Optional property
    keywords?: string[]; // Optional property
    _self?: string; // Optional property
}