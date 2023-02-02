type DataEntry = {
    author: String | null;
    category: String;
    country: String;
    description: String;
    image: String | null;
    language: String;
    published_at: DateTime;
    source: String;
    title: String;
    url: String;
};


type Pagination = {
    count: int;
    limit: int;
    offset: int;
    total: int;
};

type NewsResponse = {
    pagination: Pagination;
    data: DataEntry[];    
};

type Category = 
| 'business' 
| 'entertainment' 
| 'general' 
| 'health' 
| 'science' 
| 'sports' 
| 'technology';